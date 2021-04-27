package br.com.crasdefault.Dao;

import com.mchange.v2.c3p0.ComboPooledDataSource;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

public class ConnectionFactory {

    public DataSource dataSources;

    public ConnectionFactory(){
        ComboPooledDataSource comboPooledDataSource = new ComboPooledDataSource();
        comboPooledDataSource.setJdbcUrl("jdbc:sqlserver://cras-default.database.windows.net:1433;database=cras-default;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;");
        comboPooledDataSource.setUser("crasdefault");
        comboPooledDataSource.setPassword("#Gfgrupo8");

        this.dataSources = comboPooledDataSource;
    }


    public Connection criaConexao() throws SQLException {
        return dataSources.getConnection();
    }
}
