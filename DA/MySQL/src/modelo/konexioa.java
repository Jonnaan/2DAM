package modelo;

import java.sql.Connection;

public class konexioa {
	
	Connection db = null;
	
	public konexioa() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			db = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:3307/ariketa1", "root", "");
		} catch (Exception e) {
			System.out.println("Errorea konexioa sortzerakoan: " + e);
		}
	}

	public Connection getKonexioa() {
		return db;
	}
	
	public void itxiKonexioa() {
		try {
			db.close();
		} catch (Exception e) {
			System.out.println("Errorea konexioa ixterakoan: " + e);
		}
	}
	
	
	
	public void aurkeztuDepartamentuak() {
		
		try {
			db = getKonexioa();
            java.sql.Statement s = db.createStatement();
            java.sql.ResultSet rs = s.executeQuery("select * from departamentos");
            while (rs.next()) {
                System.out.println("Departamentuaren izena: " + rs.getString("dnombre"));
            }
        } catch (Exception e) {
            System.out.println("Errorea departamentuak aurkezterakoan: " + e);
        }
    }

}
