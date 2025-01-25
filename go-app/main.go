package main

import "net/http"

func main() {
	serverMux := http.NewServeMux()

	serverMux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		_, _ = w.Write([]byte("Hello World"))
	})

	server := http.Server{
		Addr:    ":4444",
		Handler: serverMux,
	}

	_ = server.ListenAndServe()
}
