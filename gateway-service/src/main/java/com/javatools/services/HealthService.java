package com.javatools.services;

import com.javatools.models.HealthResponse;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

/**
 * Сервис для проверки состояния приложения
 */
@Service
public class HealthService {
    
    private static final String SERVICE_NAME = "Java Tools Platform";
    
    /**
     * Получить статус здоровья приложения
     */
    public HealthResponse getHealthStatus() {
        return new HealthResponse("UP", LocalDateTime.now(), SERVICE_NAME);
    }
} 