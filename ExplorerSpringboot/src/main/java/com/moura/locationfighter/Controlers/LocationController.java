package com.moura.locationfighter.Controlers;

import com.moura.locationfighter.Entities.Location;
import com.moura.locationfighter.Repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/location")
@CrossOrigin(origins ="http://localhost:3000")
public class LocationController {

    @Autowired
    private LocationRepository locationRepository;

    @GetMapping
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Location> getLocationById(@PathVariable Long id) {
        return locationRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Location createLocation(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("lat") Double lat,
            @RequestParam("lng") Double lng,
            @RequestParam("image") MultipartFile image) throws IOException {
        Location location = new Location();
        location.setName(name);
        location.setDescription(description);
        location.setLat(lat);
        location.setLng(lng);
        location.setImage(image.getBytes());
        return locationRepository.save(location);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Location> updateLocation(
            @PathVariable Long id,
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("lat") Double lat,
            @RequestParam("lng") Double lng,
            @RequestParam(value = "image", required = false) MultipartFile image) throws IOException {
        return locationRepository.findById(id)
                .map(location -> {
                    location.setName(name);
                    location.setDescription(description);
                    location.setLat(lat);
                    location.setLng(lng);
                    if (image != null) {
                        try {
                            location.setImage(image.getBytes());
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                    return ResponseEntity.ok(locationRepository.save(location));
                })
                .orElse(ResponseEntity.notFound().build());
    }

}