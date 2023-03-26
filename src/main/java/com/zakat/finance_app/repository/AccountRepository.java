package com.zakat.finance_app.repository;

import com.zakat.finance_app.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
}