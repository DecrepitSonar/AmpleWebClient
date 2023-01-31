import tornado.web
import tornado.ioloop

class basicRequestHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello world, this is a request handler executed by a python backend")

        
if __name__ == "main":
    app = tornado.web.application([
        (r,"/", basicRequestHandler)
    ])

port = 8888
app.listen(port)
print(f"Application is running on port {port}")

app.tornado.ioloop.IOloop.current().start()