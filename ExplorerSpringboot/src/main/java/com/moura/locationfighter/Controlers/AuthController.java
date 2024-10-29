package com.moura.locationfighter.Controlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.moura.locationfighter.Entities.User;
import com.moura.locationfighter.Repository.UserRepository;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");

        if (register(username, password) != null) {
            return ResponseEntity.ok(Map.of("message", "Utilisateur créé avec succès"));
        }
        return ResponseEntity.badRequest().body(Map.of("message", "Nom d'utilisateur déjà pris"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");

        User user = login(username, password);
        if (user != null) {
            return ResponseEntity.ok(Map.of("message", "Connexion réussie !"));
        }
        return ResponseEntity.status(401).body(Map.of("message", "Nom d'utilisateur ou mot de passe incorrect"));
    }

     @Autowired
    private UserRepository userRepository;

    @Autowired
    private org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder passwordEncoder;

    

    public User register(String username, String password) {
        String encodedPassword = passwordEncoder.encode(password);
        User user = new User();
        user.setUsername(username);
        user.setPassword(encodedPassword);
        return userRepository.save(user);
    }

    public User login(String username, String password) {
        return userRepository.findByUsername(username)
                .filter(user -> passwordEncoder.matches(password, user.getPassword()))
                .orElse(null);
    }
}