let assert = require("assert");
let TaxiTrips = require("../fe-taxi-trips");
const pg = require("pg");
// const taxiTrips = require("../taxi-trips");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://codex-coder:pg123@localhost:5432/fetxidb_test';

const pool = new Pool({
    connectionString,
    ssl: {
        rejectUnauthorized: false
    }
});

describe('Taxi Trips', function () {

    // beforeEach(async function () {
    //     await pool.query(`delete from region`)
    // });



    it('should find all the regions', async function () {

        const taxiTrips = TaxiTrips(pool);
        let expected = 3
        let actual = await taxiTrips.findAllRegions()
        assert.equal(expected, actual.length);

    });

    it('should find all the taxis for a region', async function () {
        const taxiTrips = TaxiTrips(pool);

        let capeTownTaxis = [{ "reg_number": "CA1111" }, { "reg_number": "CY5555" }, { "reg_number": "CJ2222" }]
        let durbanTaxis = [{ "reg_number": "ZN1111" }, { "reg_number": "ZN5555" }, { "reg_number": "ZN2222" }]
        let kznTaxis = [{ "reg_number": "DZ1111" }, { "reg_number": "DD5555" }, { "reg_number": "DH2222" }];

        assert.deepStrictEqual(durbanTaxis, await taxiTrips.findTaxisForRegion('Durban'));
        assert.deepStrictEqual(capeTownTaxis, await taxiTrips.findTaxisForRegion('Cape Town'));
        assert.deepStrictEqual(kznTaxis, await taxiTrips.findTaxisForRegion('Gauteng'));

    })

    it('should find all the trips for a reg number', async function () {

        const taxiTrips = TaxiTrips(pool);

        let DZ1111trips = [
            { route_name: 'sandton-midrand', sum: '476.00' },
            { route_name: 'sandton-alexandra', sum: '476.00' },
            { route_name: 'sandton-randburg', sum: '476.00' }
          ]
          
        assert.deepStrictEqual(DZ1111trips, await taxiTrips.findTripsByRegNumber('DZ1111'));
        
    });

    it('should find the total number of trips by region', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual(13, await taxiTrips.findTripsByRegion('Cape Town'));
        assert.deepStrictEqual(13, await taxiTrips.findTripsByRegion('Gauteng'));
        assert.deepStrictEqual(13, await taxiTrips.findTripsByRegion('Gauteng'));

    });

    it('find the total income for a given reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual({ sum: '756.00', trip_reg_number: 'ZN1111' }, await taxiTrips.findIncomeByRegNumber('ZN1111'));
        assert.deepStrictEqual({ sum: '476.00', trip_reg_number: 'DZ1111' }, await taxiTrips.findIncomeByRegNumber('DZ1111'));

    });

    it('find the total income for each taxi', async function () {

        const taxiTrips = TaxiTrips(pool);
        let actual = await taxiTrips.findTotalIncomePerTaxi()
        let expected =[
            { trip_reg_number: 'ZN5555', sum: '784.00' },
            { trip_reg_number: 'ZN2222', sum: '756.00' },
            { trip_reg_number: 'ZN1111', sum: '756.00' },
            { trip_reg_number: 'DZ1111', sum: '476.00' },
            { trip_reg_number: 'DH2222', sum: '595.00' },
            { trip_reg_number: 'DD5555', sum: '476.00' },
            { trip_reg_number: 'CY5555', sum: '651.00' },
            { trip_reg_number: 'CJ2222', sum: '686.00' },
            { trip_reg_number: 'CA1111', sum: '763.00' }
          ]
          
        assert.deepStrictEqual(expected, actual);

    });

    it('find the total income for all the taxis', async function () {
        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual(5943.00, parseFloat(await taxiTrips.findTotalIncome()));
    });

    it('find the total trip count for all the taxis', async function () {
        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual(38, await taxiTrips.totalTripCount());
    });

    it("Find the income of  specific region", async () => {
        const taxiTrips = TaxiTrips(pool);
        let actual = await taxiTrips.findTotalIncomeByRegion("Durban");
        let expected = '2296.00'
        assert.deepStrictEqual(expected, actual);

    })

        
        it("Should be able to select A region based on A reg number", async ()=> {
            const taxiTrips = TaxiTrips(pool);
            let actual = await taxiTrips.regionForTaxi("CA1111");
            
            let expected = {
                id: 2,
                name: 'Cape Town',
                trip_route: 4,
                trip_reg_number: 'CA1111',
                trip_region: 2,
                fare_total: '203.00'
              }
              
              ;
            assert.deepStrictEqual(actual,expected);
        });
    after(function () {
        pool.end();
    });

});