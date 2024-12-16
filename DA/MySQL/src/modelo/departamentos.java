package modelo;

import java.sql.*;

public class departamentos {

	konexioa db = new konexioa();
	//1. Departamentuak bat aurkeztu
	public void aurkeztuDepartamentuak() {
		try {
            java.sql.Statement s = db.getKonexioa().createStatement();
            java.sql.ResultSet rs = s.executeQuery("select * from departamentos");
            while (rs.next()) {
                System.out.println("Departamentuaren izena: " + rs.getString("dnombre"));
                System.out.println("Departamentuaren kokapena: " + rs.getString("loc"));
                System.out.println("Departamentuaren kodigoa: " + rs.getString("dept_no"));
            }
        } catch (Exception e) {
            System.out.println("Errorea departamentuak aurkezterakoan: " + e);
        }
    }

	
	// 2. Departamentu bat aurkeztu 10
	public void aurkeztuDepartamentua() {
		try {
            java.sql.Statement s = db.getKonexioa().createStatement();
            java.sql.ResultSet rs = s.executeQuery("select apellido, oficio, salario from empleados where dept_no = 10");
            while (rs.next()) {
                System.out.println("Departamentuaren izena: " + rs.getString("apellido"));
                System.out.println("Departamentuaren kokapena: " + rs.getString("oficio"));
                System.out.println("Departamentuaren kodigoa: " + rs.getString("salario"));
            }
        } catch (Exception e) {
            System.out.println("Errorea departamentuak aurkezterakoan: " + e);
        }
    }
	
	//2. Departamentu bat aurkeztu 10 Prepared Statement
	public void aurkeztuDepartamentuaPrepared() {
		try {
			PreparedStatement query = db.getKonexioa().prepareStatement("select apellido,oficio,salario from empleados where dept_no = 10");
			query.executeQuery();
			ResultSet rs = query.getResultSet();
            while (rs.next()) {
                System.out.println("Departamentuaren izena: " + rs.getString("apellido"));
                System.out.println("Departamentuaren kokapena: " + rs.getString("oficio"));
                System.out.println("Departamentuaren kodigoa: " + rs.getString("salario"));
            }
        } catch (Exception e) {
            System.out.println("Errorea departamentuak aurkezterakoan: " + e);
        }
    }
	
	//3 Procedurak
		public void lortuDepartamentuakP() {
        try {
            CallableStatement cs = db.getKonexioa().prepareCall("call departamentuakLortu()");
            ResultSet rs = cs.executeQuery();
            while (rs.next()) {
                System.out.println("Departamentuaren izena: " + rs.getString("dnombre"));
                System.out.println("Departamentuaren kokapena: " + rs.getString("loc"));
                System.out.println("Departamentuaren kodigoa: " + rs.getString("dept_no"));
            }
        } catch (Exception e) {
            System.out.println("Errorea departamentuak aurkezterakoan:");
        }}
	public void lortuDepartamentuaP() {
		try {
			CallableStatement cs = db.getKonexioa().prepareCall("call lortuDepartamentua()");
			ResultSet rs = cs.executeQuery();
			while (rs.next()) {
				System.out.println("-----------Lortutako Langilea-----------");
		          System.out.println("Departamentuaren izena: " + rs.getString("emp_no"));
	                System.out.println("Departamentuaren kokapena: " + rs.getString("oficio"));
	                System.out.println("Departamentuaren kodigoa: " + rs.getString("salario"));
			}
		} catch (Exception e) {
			System.out.println("Errorea departamentuak aurkezterakoan: " + e);
		}}
	
	
	//4. Departamentu bat sortu
	public void sortuDepartamentua() {
		try {
			PreparedStatement query = db.getKonexioa().prepareStatement("insert into departamentos values (?,?,?)");
			query.setInt(1, 50);
			query.setString(2, "Marketing");
			query.setString(3, "Valencia");
			query.executeUpdate();
			System.out.println("Departamentua sortu da.");
		} catch (Exception e) {
			System.out.println("Errorea departamentua sortzerakoan: " + e);
		}
	}
	
	//5. Departamentu 50 ezabatu, lehenengo langileak ezabatu eliminar_dept_marketing() 
	public void eliminarDeptMarketing() {
		try {
			CallableStatement cs = db.getKonexioa().prepareCall("call eliminar_dept_marketing()");
			cs.executeQuery();
		} catch (Exception e) {
			System.out.println("Errorea departamentua ezabatzerakoan: " + e);
		}
	}
	
	
	
}
