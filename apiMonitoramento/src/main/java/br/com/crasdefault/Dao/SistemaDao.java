package br.com.crasdefault.Dao;

import com.github.britooo.looca.api.core.Looca;
import br.com.crasdefault.funcionalidades.ConvesorDeDados;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.sql.*;

public class SistemaDao {

    private Connection connection;
    private Looca looca = new Looca();
    private LoginDao loginDao = new LoginDao();
    private ConvesorDeDados convesor = new ConvesorDeDados();

    public SistemaDao()  {
        ConnectionFactory connectionFactory = new ConnectionFactory();
        try {
            connection = connectionFactory.criaConexao();
        } catch (Exception e){
            e.printStackTrace();
        }

    }
    public void inserir() throws SQLException, UnknownHostException {
        System.out.println("teste sistema init");
            PreparedStatement stm = connection.prepareStatement("insert into maquinas(hostName,sistemaoperacional,processadorInfo,qtdMemoria,qtdArmazenamento,fkCliente) values (?, ?, ?, ?, ?, ?)", Statement.RETURN_GENERATED_KEYS);
            stm.setString(1, InetAddress.getLocalHost().getHostName());
            stm.setString(2,looca.getSistema().getSistemaOperacional());
            stm.setString(3,looca.getProcessador().getNome());
            stm.setString(4,convesor.convert(looca.getMemoria().getTotal(),2));
            stm.setString(5,convesor.convert(looca.getGrupoDeDiscos().getVolumes().get(0).getTotal(),2));
            stm.setString(6,loginDao.getFkCliente());
            stm.execute();
            connection.close();
        System.out.println("teste sistema fim");
    }
}
