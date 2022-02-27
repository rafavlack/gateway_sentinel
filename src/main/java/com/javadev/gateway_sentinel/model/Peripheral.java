package com.javadev.gateway_sentinel.model;

import lombok.*;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "peripheral")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class Peripheral implements Serializable {

 @Id
 @Column(name = "id_peripheral")
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Integer id_peripheral;

 @Column(name = "uid_peripheral")
 private Integer uid_peripheral;

 @Column(name = "vendor")
 private String vendor;

 @Column(name = "date_created")
 private Date date_created;

 @Column(name = "status")
 private Status status;

 @ManyToOne
 @Cascade(value={org.hibernate.annotations.CascadeType.ALL})
 @JoinColumn(name="id_gateway")
 private Gateway gateway;

}
