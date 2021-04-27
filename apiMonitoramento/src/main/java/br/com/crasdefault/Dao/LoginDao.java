/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.crasdefault.Dao;

import java.sql.*;

/**
 *
 * @author yurih
 *
 */
public class LoginDao {

    private Connection connectionFactory;
    private static String fkCliente;


    public LoginDao() {
        ConnectionFactory connection = new ConnectionFactory();
        try {
            connectionFactory = connection.criaConexao();
        } catch (Exception e){
            e.printStackTrace();
        }

    }

    public Boolean VerificarLogin(String email, String senha) throws SQLException {
        PreparedStatement stm = connectionFactory.prepareStatement("select * from usuarios where email = ? and senha = ?");
        stm.setString(1,email);
        stm.setString(2,senha);
        ResultSet rs = stm.executeQuery();

        if (rs.next()) {
            System.out.println("Logado");
            this.fkCliente = rs.getString("fkCliente");
            connectionFactory.close();
            return true;
        } else {
            System.out.println("Login Inválido");
            connectionFactory.close();
            return false;
        }

    }

    public String getFkCliente() {
        return fkCliente;
    }
}
