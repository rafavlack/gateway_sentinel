package com.javadev.gateway_sentinel.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
@Table(name = "gateway")
@Setter
@Getter
@RequiredArgsConstructor
@ToString
public class Gateway implements Serializable {

    @Id
    @Column(name = "id_gateway")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_gateway;

    @Column(name = "serial_number")
    private String serial_number;

    @Column(name = "name_gateway")
    private String name_gateway;

    @Column(name = "ipv4_address")
    private String ipv4_address;

    @OneToMany(mappedBy = "gateway")
    private List<Peripheral> peripheralSet;

}
