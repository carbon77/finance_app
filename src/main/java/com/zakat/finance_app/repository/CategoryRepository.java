package com.zakat.finance_app.repository;

import com.zakat.finance_app.model.Category;
import com.zakat.finance_app.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    @Query(
            value = "SELECT t FROM Category c JOIN Transaction t ON t.category.id = ?1"
    )
    List<Transaction> findTransactionsByCategory(Long categoryId);
}