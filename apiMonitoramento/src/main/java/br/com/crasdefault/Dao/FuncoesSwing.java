package br.com.crasdefault.Dao;

import javax.swing.*;
import java.awt.*;

public class FuncoesSwing {

    public FuncoesSwing() {

    }

    public void inserirIcone(JFrame frm) {
        try {
            frm.setIconImage(Toolkit.getDefaultToolkit().getImage("src/main/java/br.com.crasdefault.ImagensSwing/icone.png"));
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

}
