package com.zakat.finance_app.service;

import com.zakat.finance_app.model.Category;
import com.zakat.finance_app.model.Transaction;
import com.zakat.finance_app.repository.CategoryRepository;
import org.springframework.stereotype.Service;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;

@Service
public class CategoryService extends BasicService<Category, Long> {
    private final CategoryRepository categoryRepository;

    protected CategoryService(CategoryRepository categoryRepository) {
        super(categoryRepository);
        this.categoryRepository = categoryRepository;
    }

    public List<Transaction> findTransactionsByCategory(Long categoryId) {
        return this.categoryRepository.findTransactionsByCategory(categoryId);
    }
}
