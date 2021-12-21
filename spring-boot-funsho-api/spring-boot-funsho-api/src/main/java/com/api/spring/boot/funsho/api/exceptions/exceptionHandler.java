package com.api.spring.boot.funsho.api.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import com.rest.all_apis.user_api.ExceptionHandler.ExceptionResponse;

import java.util.Date;

@RestController
@RestControllerAdvice
public class exceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(Exception.class)
    public final ResponseEntity<Object>
        handleAllException(Exception ex, WebRequest request) throws Exception {
        ExceptionResponse er = new ExceptionResponse(new Date(),ex.getMessage(),request.getDescription(false));
        return new ResponseEntity(er, HttpStatus.NOT_FOUND);
    }

}
