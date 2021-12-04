package demoBooksAPI;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ErrorPage {
	
	@GetMapping("/error")
	public String ErrorPageFound() {
		return "Page Not Found 404 ";
	}
	
}
