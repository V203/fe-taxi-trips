insert into region(id ,name) values (1,'Durban');
insert into region(id, name) values (2,'Cape Town');
insert into region(id,name) values (3,'Gauteng');


insert into route(route_name,fare_per_trip ,region_id) values('umlazi',210.00,1);
insert into route(route_name,fare_per_trip ,region_id) values('umhlanga',238.00,1);
insert into route(route_name,fare_per_trip ,region_id) values('umbilo',98.00,1);


insert into route(route_name,fare_per_trip,region_id) values('bellville',203.00,2);
insert into route(route_name,fare_per_trip,region_id) values('guglethu',168.00,2);
insert into route(route_name,fare_per_trip,region_id) values('langa',112.00,2);


insert into route(route_name,fare_per_trip,region_id) values('sandton-randburg',119.00,3);
insert into route( route_name,fare_per_trip,region_id) values('sandton-alexandra',119.00,3);
insert into route(route_name,fare_per_trip,region_id) values('sandton-midrand',119.00,3);

insert into taxi(reg_number,taxi_region_id) values('ZN1111',1);
insert into taxi(reg_number,taxi_region_id) values('ZN5555',1);
insert into taxi(reg_number,taxi_region_id) values('ZN2222',1);
insert into taxi(reg_number,taxi_region_id) values('CA1111',2);
insert into taxi(reg_number,taxi_region_id) values('CY5555',2);
insert into taxi(reg_number,taxi_region_id) values('CJ2222',2);
insert into taxi(reg_number,taxi_region_id) values('DZ1111',3);
insert into taxi(reg_number,taxi_region_id) values('DD5555',3);
insert into taxi(reg_number,taxi_region_id) values('DH2222',3);

insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(1,'ZN1111',1,210.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(1,'ZN1111',1,210.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(3,'ZN1111',1,98.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(2,'ZN1111',1,238.00);

insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(3,'ZN5555',1,98.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(1,'ZN5555',1,210.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(2,'ZN5555',1,238.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(2,'ZN5555',1,238.00);

insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(1,'ZN2222',1,210.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(1,'ZN2222',1,210.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(2,'ZN2222',1,238.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(3,'ZN2222',1,98.00);

insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(4,'CA1111',2,203.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(5,'CA1111',2,168.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(6,'CA1111',2,112.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(5,'CA1111',2,168.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(6,'CA1111',2,112.00);

insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(4,'CY5555',2,203.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(5,'CY5555',2,168.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(6,'CY5555',2,112.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(5,'CY5555',2,168.00);

insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(4,'CJ2222',2,203.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(5,'CJ2222',2,168.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(6,'CJ2222',2,112.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(4,'CJ2222',2,203.00);

insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(7,'DZ1111',3,119.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(7,'DZ1111',3,119.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(8,'DZ1111',3,119.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(9,'DZ1111',3,119.00);

insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(7,'DD5555',3,119.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(8,'DD5555',3,119.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(9,'DD5555',3,119.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(9,'DD5555',3,119.00);


insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(9,'DH2222',3,119.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(7,'DH2222',3,119.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(8,'DH2222',3,119.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(9,'DH2222',3,119.00);
insert into trip(trip_route,trip_reg_number,trip_region,fare_total) values(9,'DH2222',3,119.00);
