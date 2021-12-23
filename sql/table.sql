
drop table if exists route;
drop table if exists taxi;
drop table if exists trip;

create table region(id serial primary key not null, name text not null);

create table route(
    id serial primary key,
    route_name text not null,
    fare_per_trip decimal(10, 02),
    region_id int not null,
    foreign key (region_id) references region(id)
);

create table trip(
    trip_route int not null,
    trip_reg_number text not null,
    trip_region int,
    fare_total decimal(10, 02) not null,
    foreign key (trip_region) references region(id),
    foreign key (trip_route) references route(id)
);

create table taxi(
    reg_number text not null,
    taxi_region_id int not null,
    foreign key(taxi_region_id) references region(id)    
);
