package Ariketa;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.net.UnknownHostException;

public class Bezeroa {

	public static void main(String[] args) {
		//Aldagaiak
		Socket bezeroSocket;
		
		//Konexioa
		try {
			bezeroSocket = new Socket("localhost", Zerbitzaria.PORT);
			
			System.out.println("Konexioa eginda.");
			
			//Bidali Mezua
			DataOutputStream dos = new DataOutputStream(bezeroSocket.getOutputStream());
			dos.writeUTF("Kaixo, bezeroa naiz.");

			//Erantzuna jaso
			DataInputStream dis = new DataInputStream(bezeroSocket.getInputStream());
			System.out.println("Zerbitzariaren erantzuna: " + dis.readUTF());
			
		    //Itxi
			bezeroSocket.close();
		} catch (UnknownHostException e) {
			System.out.println("Errorea: ezin izan da konexioa sortu.");
			e.printStackTrace();
		} catch (IOException e) {
			System.out.println("Errorea: ezin izan da zerbitzaria aurkitu.");
			e.printStackTrace();
		}
		
		
		
		
		
	}
}
