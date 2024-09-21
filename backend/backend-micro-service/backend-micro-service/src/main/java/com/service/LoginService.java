package com.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Login;
import com.repository.LoginRepository;

@Service
public class LoginService {

	@Autowired
	LoginRepository loginRepository;
	
	public String signIn(Login login) {
		Optional<Login> result = loginRepository.findById(login.getEmailid());
		if(result.isPresent()) {
				Login ll=result.get();
				if(ll.getPassword().equals(login.getPassword())) {
					
					if(ll.getTypeofuser().equals(login.getTypeofuser()) && ll.getTypeofuser().equals("admin")) {
						return "Admin login successfully";
					}else if(ll.getTypeofuser().equals(login.getTypeofuser()) && ll.getTypeofuser().equals("user")){
						return "user login successfully";
					}else {
						return "wrong type of user";
					}
					
				}else {
					return "Password is invalid";
				}
		}else {
			return "EmailId is invalid";
		}
		
	}
	
	public String signUp(Login login) {
		Optional<Login> result = loginRepository.findById(login.getEmailid());
		if(result.isPresent()) {
			return "Emailid id already present";
		}else if(login.getTypeofuser().equals("admin")){
			return "You can't create admin account";
		}else {
			loginRepository.save(login);
			return "Account created successfully";
		}
		
	}
}
