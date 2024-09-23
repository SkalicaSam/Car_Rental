package com.example.Car_Rental_Spring.dto;

import com.example.Car_Rental_Spring.enums.UserRole;
import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String name;
    private String email;
    private UserRole userRole;


    public void setId(Long id) {
        this.id = id;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setUserRole(UserRole userRole) {
        this.userRole = userRole;
    }
}
