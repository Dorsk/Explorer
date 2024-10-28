package com.moura.locationfighter.Controlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.moura.locationfighter.Entities.User;
import com.moura.locationfighter.Services.UserService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");

        if (userService.register(username, password) != null) {
            return ResponseEntity.ok(Map.of("message", "Utilisateur créé avec succès"));
        }
        return ResponseEntity.badRequest().body(Map.of("message", "Nom d'utilisateur déjà pris"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");

        User user = userService.login(username, password);
        if (user != null) {
            return ResponseEntity.ok(Map.of("message", "Connexion réussie !"));
        }
        return ResponseEntity.status(401).body(Map.of("message", "Nom d'utilisateur ou mot de passe incorrect"));
    }
}