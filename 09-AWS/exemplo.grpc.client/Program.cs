using System;
using System.Threading.Tasks;
using Grpc.Net.Client;

namespace exemplo.grpc.client
{
    class Program
    {
        #region snippet
        static async Task Main(string[] args) {
            // This switch must be set before creating the GrpcChannel/HttpClient.
            AppContext.SetSwitch(
            "System.Net.Http.SocketsHttpHandler.Http2UnencryptedSupport", true);

            // The port number(5000) must match the port of the gRPC server.
            var channel = GrpcChannel.ForAddress("http://localhost:5000");
            var client = new Greeter.GreeterClient(channel);
            var reply = await client.SayHelloAsync(
                new HelloRequest { Name = "Hello World!" });
            Console.WriteLine("Greeting: " + reply.Message);
            Console.WriteLine("Press any key to exit...");
            Console.ReadKey();
        }
        #endregion
    }
}
