package com.javadev.gateway_sentinel.model;


import lombok.Getter;

@Getter
public enum Status {

    OFFLINE("OFFLINE"),
    ONLINE("ONLINE");

    private final String status;

    Status(String status) {
        this.status = status;
    }

}
