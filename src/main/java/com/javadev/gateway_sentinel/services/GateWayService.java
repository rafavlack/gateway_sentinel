package com.javadev.gateway_sentinel.services;

import com.javadev.gateway_sentinel.model.Gateway;
import com.javadev.gateway_sentinel.repository.GatewayRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
@RequiredArgsConstructor
public class GateWayService {

    private final GatewayRepository gatewayRepository;

    public List<Gateway> getAllGateList(){
        return gatewayRepository.findAll();
    }

    public void saveGateway(Gateway gateway){
        gatewayRepository.save(gateway);
    }
}
