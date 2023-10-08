import java.util.Scanner;

public class DesafioExtraControleDeFluxo {

        public static void main(String[] args) {
            Scanner terminal = new Scanner(System.in);
            System.out.println("Digite o primeiro parâmetro");
            int parametroUm = terminal.nextInt(); // Ler o primeiro parâmetro
            System.out.println("Digite o segundo parâmetro");
            int parametroDois = terminal.nextInt(); // Ler o segundo parâmetro

            try {
                // Chamando o método contendo a lógica de contagem
                contar(parametroUm, parametroDois);

            } catch (ParametrosInvalidosException exception) {
                // Imprimir a mensagem: O segundo parâmetro deve ser maior que o primeiro
                System.out.println("O segundo parâmetro deve ser maior que o primeiro");
            }
        }

        static void contar(int parametroUm, int parametroDois) throws ParametrosInvalidosException {
            // Validar se parametroUm é MAIOR que parametroDois e lançar a exceção
            if (parametroUm >= parametroDois) {
                throw new ParametrosInvalidosException("O segundo parâmetro deve ser maior que o primeiro");
            }

            int contagem = parametroUm;
            // Realizar o for para imprimir os números com base na variável contagem
            while (contagem <= parametroDois) {
                System.out.println("Imprimindo o número " + contagem);
                contagem++;
            }
        }

    static class ParametrosInvalidosException extends Exception {
        public ParametrosInvalidosException(String mensagem) {
            super(mensagem);
        }
    }

}
