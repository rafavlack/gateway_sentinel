package com.javadev.gateway_sentinel.model;

import lombok.*;
import org.hibernate.validator.constraints.UniqueElements;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "gateway_sentinel")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Gateway implements Serializable {

    @Id
    @Column(name = "id_gateway")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_gateway;

    @Column(name = "serial_number", unique = true)
    private String serial_number;

    @Column(name = "name_gateway")
    private String name_gateway;

    @Column(name = "ipv4_address", unique = true)
    @NotEmpty(message = "Please write the IPv4")
    private String ipv4_address;

    @Column(name = "status")
    private Status status;

    private Set<Peripheral> peripheralList;


}
