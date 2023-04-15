package com.zakat.finance_app.service;

import com.zakat.finance_app.model.User;
import com.zakat.finance_app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService extends BasicService<User, Long> {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        super(userRepository);
        this.userRepository = userRepository;
    }

    public User findUserByNameAndPassword(String name, String password) {
        return this.userRepository.findByNameAndPassword(name, password);
    }
}
