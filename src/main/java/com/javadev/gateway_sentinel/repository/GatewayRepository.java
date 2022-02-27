package com.javadev.gateway_sentinel.repository;
import com.javadev.gateway_sentinel.model.Gateway;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GatewayRepository extends JpaRepository<Gateway, Integer> {
}
