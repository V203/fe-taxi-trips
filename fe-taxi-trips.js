module.exports = function TaxiTrips(pool) {


    let totalTripCount = async () => {
        try {
            return Number((await pool.query(`select count(*) from trip`)).rows[0]['count'])


        } catch (error) {
            console.log(`${error}`);
        }
    }

    let findAllRegions = async () => {
        try {
            return (await pool.query(`Select * from region`)).rows
        } catch (error) {
            console.log(`findAllRegions error : ${error}`);
        }
    };

    let findTaxisForRegion = async (region) => {
        try {
            return (await pool.query(`SELECT reg_number FROM taxi join region on region.id = taxi.taxi_region_id where region.name = '${region}'`)).rows
        } catch (error) {
            console.log(e);
        }
    };

    let findTripsByRegNumber = async (reg_number) => { try { return (await pool.query(`select * from trip where trip.trip_reg_number = '${reg_number}'`)).rows } catch (error) { `${error}` } };

    let findTripsByRegion = async (region) => { try { return Number((await pool.query(`select count(*) from trip join region on region.id = trip.trip_region where '${region}' = region.name`)).rows[0]['count']) } catch (e) { console.log(e); } };

    let findIncomeByRegNumber = async (par) => {
        try {
            return (await pool.query(`select trip_reg_number ,sum(fare_total) from trip where trip.trip_reg_number = '${par}' group by trip_reg_number`)).rows['0']
        } catch (e) {
            console.log(e)
        }
    }

    let findTotalIncomePerTaxi = async () => { try { return (await pool.query(`select  trip_reg_number,sum(fare_total) from trip group by trip_reg_number order by trip_reg_number desc`)).rows } catch (e) { console.log(e); } }

    let findTotalIncome = async () => {
        try {
            return (await pool.query(`select sum(fare_total) from trip`)).rows[0]['sum']
        } catch (error) {
            console.log(error);
        }
    };

    let findTotalIncomeByRegion = async (region) => {
        try {
            return (await pool.query(`select sum(fare_total) from trip join region on region.id = trip.trip_region where region.name = '${region}' group by region.name`)).rows[0]["sum"]
        } catch (error) {
            console.log(error);
        }
    };

    let unifiedSelector = async () => {
        try {
            return (await pool.query(`select region.name, trip_region, trip_reg_number,round(avg(fare_total),2) as avg, sum(fare_total) from trip join region on region.id = trip.trip_region group by region.name,trip_region,trip_reg_number order by sum desc limit 5
        `)).rows
        } catch (error) {
            console.log(error);
        }
    };

    let regionForTaxi = async (reg_num) => {
        try {
            return (await pool.query(`select * from region inner join trip on region.id = trip.trip_region where trip.trip_reg_number = '${reg_num}'`)).rows[0]
        } catch (error) {

        }
    }

    return {
        totalTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber,
        findTripsByRegion,
        findIncomeByRegNumber,
        findTotalIncomePerTaxi,
        findTotalIncome,
        findTotalIncomeByRegion,
        unifiedSelector,
        regionForTaxi
    };
};