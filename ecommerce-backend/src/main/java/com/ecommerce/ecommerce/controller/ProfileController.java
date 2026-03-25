package com.ecommerce.ecommerce.controller;

import com.ecommerce.ecommerce.model.User;
import com.ecommerce.ecommerce.service.UserService;
import com.ecommerce.ecommerce.dto.PasswordDto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class ProfileController {

    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public User getProfile(Authentication auth) {
        return userService.getByUsername(auth.getName());
    }

    @PutMapping("/profile")
    public User updateProfile(@RequestBody User user, Authentication auth) {
        return userService.updateUser(auth.getName(), user);
    }

    @PostMapping("/change-password")
    public String changePassword(@RequestBody PasswordDto dto, Authentication auth) {
        userService.changePassword(auth.getName(), dto);
        return "Password updated";
    }
}