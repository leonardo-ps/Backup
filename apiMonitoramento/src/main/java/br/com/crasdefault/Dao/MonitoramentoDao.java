package br.com.crasdefault.Dao;

import com.github.britooo.looca.api.core.Looca;
import br.com.crasdefault.funcionalidades.ConvesorDeDados;

import java.net.InetAddress;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.TimeZone;
import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;

public class MonitoramentoDao {
    private Connection connection;
    private Looca looca = new Looca();
    private ConvesorDeDados convesor = new ConvesorDeDados();
    public MonitoramentoDao() {
        ConnectionFactory connectionFactory = new ConnectionFactory();
        try {
            connection = connectionFactory.criaConexao();
        } catch (Exception e){
            e.printStackTrace();
        }

    }
    public void inserir() throws Exception{
        PreparedStatement stm = connection.prepareStatement("insert into logs(momentoCaptura, usoCpu, usoArmazenamento, usoMemoria, tempoUso, fkMaquina) values (?, ?, ?, ?, ?, ?)");
        TimeZone.setDefault(TimeZone.getTimeZone("America/Sao_Paulo"));
        DateTimeZone.setDefault(DateTimeZone.forID("America/Sao_Paulo"));
        Timestamp hora = new Timestamp(new DateTime().getMillis());
        System.out.println(hora);
        stm.setTimestamp(1, Timestamp.valueOf(LocalDateTime.now()));
        stm.setDouble(2, Double.valueOf(String.format("%.2f", looca.getProcessador().getUso()).replaceAll(",", ".")));
        stm.setDouble(3,Double.valueOf(convesor.convert(looca.getGrupoDeDiscos().getVolumes().get(0).getDisponivel(),2)));
        stm.setDouble(4,Double.valueOf(convesor.convert(looca.getMemoria().getEmUso(),2)));
        stm.setString(5,looca.getSistema().getTempoDeAtividade().toString());
        stm.setString(6, InetAddress.getLocalHost().getHostName());
        stm.execute();
        connection.close();
    }
}
