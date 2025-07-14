package com.javatools.controllers;

import com.javatools.models.AppInfo;
import com.javatools.models.HealthResponse;
import com.javatools.services.ApplicationInfoService;
import com.javatools.services.HealthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST контроллер для API endpoints
 */
@RestController
@RequestMapping("/api")
public class ApiController {
    
    @Autowired
    private HealthService healthService;
    
    @Autowired
    private ApplicationInfoService applicationInfoService;
    
    /**
     * Health check endpoint
     */
    @GetMapping("/health")
    public HealthResponse health() {
        return healthService.getHealthStatus();
    }
    
    /**
     * Информация о приложении
     */
    @GetMapping("/info")
    public AppInfo info() {
        return applicationInfoService.getApplicationInfo();
    }
} 