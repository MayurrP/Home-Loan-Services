package com.app.customException;

@SuppressWarnings("serial")
public class ValueNotValidException extends RuntimeException {
	
	public ValueNotValidException(String msg)
	{
		super(msg);
	}
}
