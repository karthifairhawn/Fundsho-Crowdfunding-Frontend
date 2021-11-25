package demoBooksAPI;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GetBooks {
	
	@RequestMapping("/allbooks")
	public List<Book> getBooks() {
		return Arrays.asList(new Book(1,"Morning star","kfh"));
	}
}
