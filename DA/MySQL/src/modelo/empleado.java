package modelo;

import java.sql.*;

public class empleado {

	konexioa db = new konexioa();

	// 3. Empleado bat aurkeztu
	public void empleadoMaxSal() {
		try {
			Statement s = db.getKonexioa().createStatement();
			ResultSet rs = s.executeQuery("select apellido,oficio,salario from empleados where salario = (select max(salario) from empleados);");
			while (rs.next()) {
				System.out.println("Empleatuaren izena: " + rs.getString("apellido"));
				System.out.println("Empleatuaren izena: " + rs.getString("oficio"));
				System.out.println("Empleatuaren izena: " + rs.getString("salario"));
			}
		} catch (Exception e) {
			System.out.println("Errorea empleatuak aurkezterakoan: " + e);
		}
	}
	
	
	//Procedura
	
	public void lortuEmpleatua() {
		try {
			CallableStatement cs = db.getKonexioa().prepareCall("call lortuEmpleatua()");
			ResultSet rs = cs.executeQuery();
			while (rs.next()) {
                System.out.println("Empleatuaren izena: " + rs.getString("apellido"));
                System.out.println("Empleatuaren izena: " + rs.getString("oficio"));
                System.out.println("Empleatuaren izena: " + rs.getString("salario"));
            }
			} catch (Exception e) {
				System.out.println("Errorea empleatuak aurkezterakoan: " + e);
			}
	
	}
	
	//proceura añadir_dept_marketing()
	public void addDeptMarketing() {
		try {
			CallableStatement cs = db.getKonexioa().prepareCall("call añadir_dept_marketing()");
			cs.executeQuery();
		} catch (Exception e) {
			System.out.println("Errorea empleatuak aurkezterakoan: " + e);
		}
	}
	
	
	// Procedura actualizar_salarios_marketing(IN salario_nuevo FLOAT)
	public void actualizarSalariosMarketing(int salario) {
		try {
			CallableStatement cs = db.getKonexioa().prepareCall("call actualizar_salarios_marketing(?)");
			cs.setFloat(1, salario);
			cs.executeQuery();
			System.out.println("Salarioa eguneratu da");
		} catch (Exception e) {
			System.out.println("Errorea empleatuak aurkezterakoan: " + e);
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
}
