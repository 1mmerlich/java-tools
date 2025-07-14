package com.javatools.models;

/**
 * Модель информации о приложении
 */
public class AppInfo {
    private String name;
    private String version;
    private String description;
    private String[] features;
    
    public AppInfo(String name, String version, String description, String[] features) {
        this.name = name;
        this.version = version;
        this.description = description;
        this.features = features;
    }
    
    // Getters and Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getVersion() { return version; }
    public void setVersion(String version) { this.version = version; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    public String[] getFeatures() { return features; }
    public void setFeatures(String[] features) { this.features = features; }
} 