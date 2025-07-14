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
        registry.addViewController("/login").setViewName("forward:/index.html");
        registry.addViewController("/register").setViewName("forward:/index.html");
        registry.addViewController("/core-java").setViewName("forward:/index.html");
        registry.addViewController("/multithreading").setViewName("forward:/index.html");
        registry.addViewController("/sql").setViewName("forward:/index.html");
        registry.addViewController("/hibernate").setViewName("forward:/index.html");
        registry.addViewController("/spring").setViewName("forward:/index.html");
    }
} 