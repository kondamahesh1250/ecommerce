package com.ecommerce.ecommerce.config;

import com.ecommerce.ecommerce.model.User;
import com.ecommerce.ecommerce.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner init(UserRepository userRepo) {
        return args -> {

            // check if admin already exists
            if (userRepo.findByUsername("admin").isEmpty()) {

                User admin = new User();
                admin.setUsername("admin");
                admin.setEmail("admin@gmail.com");
                admin.setPassword(new BCryptPasswordEncoder().encode("password"));
                admin.setRole("ROLE_ADMIN");

                userRepo.save(admin);

                System.out.println("Default Admin Created");
            }

            if (userRepo.findByUsername("user").isEmpty()) {

                User user = new User();
                user.setUsername("user");
                user.setEmail("user@gmail.com");
                user.setPassword(new BCryptPasswordEncoder().encode("password"));
                user.setRole("ROLE_USER");

                userRepo.save(user);

                System.out.println("Default User Created");
            }
        };
    }
}