package br.com.crasdefault.Dao;

import com.github.britooo.looca.api.core.Looca;
import br.com.crasdefault.funcionalidades.ConvesorDeDados;

import java.sql.*;

public class HomeDao {

    private String cpu;
    private Double discoPorcentagem, ramPorcentagem;

    private Connection connectionFactory;
    Looca looca = new Looca();
    ConvesorDeDados convesor = new ConvesorDeDados();

    public HomeDao() {
        ConnectionFactory connection = new ConnectionFactory();

        try {
            connectionFactory = connection.criaConexao();
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    public void enviarLeitura() {
        cpu = String.format("%.2f", looca.getProcessador().getUso());
        Double discoTotal = Double.parseDouble(convesor.convert(looca.getGrupoDeDiscos().getVolumes().get(0).getTotal(),2));
        Double discoDisponivel = Double.parseDouble(convesor.convert(looca.getGrupoDeDiscos().getVolumes().get(0).getDisponivel(),2));
        Double ramTotal = Double.parseDouble(convesor.convert(looca.getMemoria().getTotal(),2));
        Double ramDisponivel = Double.parseDouble(convesor.convert(looca.getMemoria().getEmUso(),2));

        ramPorcentagem = ((ramDisponivel * 100) / ramTotal);
        discoPorcentagem = (((discoTotal - discoDisponivel) * 100) / discoTotal);


    }

    public String getCpu() {
        return cpu;
    }

    public Double getDiscoPorcentagem() {
        return discoPorcentagem;
    }

    public Double getRamPorcentagem() {
        return ramPorcentagem;
    }
}


