package com.app.pojo;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter

public class CustomerAddress {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Integer customerAddressId;
	
	@OneToOne(cascade = CascadeType.ALL)
	private PermanentAddress permanentAddress;
	
	@OneToOne(cascade = CascadeType.ALL)
	private LocalAddress localAddress;

}