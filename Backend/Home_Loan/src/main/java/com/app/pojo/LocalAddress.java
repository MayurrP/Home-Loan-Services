package com.app.pojo;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class LocalAddress {
	
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Integer localAddressId;	
	private String areaname;
	private String cityname;	
	private String district;	
	private String state;	
	private Long pincode;
	private Integer houseNumber;	
	private String streetName;	

	

}
