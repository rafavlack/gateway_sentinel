package com.javadev.gateway_sentinel.Controller;

import com.javadev.gateway_sentinel.model.Gateway;
import com.javadev.gateway_sentinel.services.GateWayService;
import org.apache.commons.validator.routines.InetAddressValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON;

@RestController
@RequestMapping("api/")
public class ApiController {


    private final GateWayService gatewayservice;

    @Autowired
    public ApiController(GateWayService gatewayservice) {
        this.gatewayservice = gatewayservice;
    }

    @GetMapping("/allgateway")
    public ResponseEntity<List<Gateway>> listPeople() {
       List<Gateway> gatewayList =  gatewayservice.getAllGateList();
        return ResponseEntity.ok().contentType(APPLICATION_JSON).body(gatewayList);
    }

    @PostMapping("/saveGateway")
    public ResponseEntity saveGateWay(@Valid @RequestBody Gateway gateway) {
        InetAddressValidator inetAddressValidator = InetAddressValidator.getInstance();
        if(inetAddressValidator.isValidInet4Address(gateway.getIpv4_address())){

            gatewayservice.saveGateway(gateway);
            return ResponseEntity.ok("gateway is saved");
        }else return new ResponseEntity<>("Please Check, the IPv4 is not correct", HttpStatus.BAD_REQUEST);
    }
}
