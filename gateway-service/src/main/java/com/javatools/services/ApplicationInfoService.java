package com.javatools.services;

import com.javatools.models.AppInfo;
import org.springframework.stereotype.Service;

/**
 * Сервис для получения информации о приложении
 */
@Service
public class ApplicationInfoService {
    
    private static final String APP_NAME = "Java Tools Platform";
    private static final String APP_VERSION = "1.0.0";
    private static final String APP_DESCRIPTION = "Educational platform for Java learning";
    private static final String[] APP_FEATURES = {
        "Interactive Java courses",
        "Code execution environment", 
        "Progress tracking",
        "Multi-level curriculum"
    };
    
    /**
     * Получить информацию о приложении
     */
    public AppInfo getApplicationInfo() {
        return new AppInfo(APP_NAME, APP_VERSION, APP_DESCRIPTION, APP_FEATURES);
    }
} 