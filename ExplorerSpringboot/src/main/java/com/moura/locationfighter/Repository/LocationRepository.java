package com.moura.locationfighter.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.moura.locationfighter.Entities.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
}
