package com.javatools.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Конфигурация веб-приложения для обслуживания React SPA
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {
    
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // Перенаправляем все не-API запросы на index.html для React Router
        registry.addViewController("/{spring:\\w+}")
            .setViewName("forward:/index.html");
        registry.addViewController("/**/{spring:\\w+}")
            .setViewName("forward:/index.html");
        registry.addViewController("/{spring:\\w+}/**{spring:?!(\\.js|\\.css)$}")
            .setViewName("forward:/index.html");
    }
} 