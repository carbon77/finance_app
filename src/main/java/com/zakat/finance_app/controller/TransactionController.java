package com.zakat.finance_app.controller;

import com.zakat.finance_app.model.Transaction;
import com.zakat.finance_app.service.TransactionService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("transactions")
@CrossOrigin
public class TransactionController extends BasicController<Transaction, Long> {
    private final TransactionService transactionService;

    protected TransactionController(TransactionService transactionService) {
        super(transactionService);
        this.transactionService = transactionService;
    }
}
