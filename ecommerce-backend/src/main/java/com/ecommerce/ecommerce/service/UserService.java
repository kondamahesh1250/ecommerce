package com.ecommerce.ecommerce.service;

import com.ecommerce.ecommerce.model.User;
import com.ecommerce.ecommerce.repository.UserRepository;
import com.ecommerce.ecommerce.dto.PasswordDto;
import com.ecommerce.ecommerce.security.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    @Autowired
    private JwtUtil jwtUtil;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User register(User user) {

        // Check username exists
        if (repo.findByUsername(user.getUsername()).isPresent()) {
            throw new RuntimeException("Username already exists");
        }

        // Check email exists
        if (repo.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        // Default role
        if (user.getRole() == null) {
            user.setRole("ROLE_USER");
        }

        // Encrypt password
        user.setPassword(encoder.encode(user.getPassword()));

        return repo.save(user);
    }

    public Map<String, String> login(User user) {

        User dbUser = repo.findByUsername(user.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!encoder.matches(user.getPassword(), dbUser.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        String token = jwtUtil.generateToken(dbUser.getUsername());

        return Map.of(
                "token", token,
                "role", dbUser.getRole()
        );
    }

    // Get user
    public User getByUsername(String username) {
        return repo.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    // Update profile
    public User updateUser(String username, User updatedUser) {
        User user = getByUsername(username);

        user.setEmail(updatedUser.getEmail());
        user.setUsername(updatedUser.getUsername());

        return repo.save(user);
    }

    // Change password
    public void changePassword(String username, PasswordDto dto) {
        User user = getByUsername(username);

        if (!encoder.matches(dto.getOldPassword(), user.getPassword())) {
            throw new RuntimeException("Old password is incorrect");
        }

        user.setPassword(encoder.encode(dto.getNewPassword()));
        repo.save(user);
    }
}