package com.packt.cardatabase;

import java.util.Arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.packt.cardatabase.domain.AppUser;
import com.packt.cardatabase.domain.AppUserRepository;
import com.packt.cardatabase.domain.Car;
import com.packt.cardatabase.domain.CarRepository;
import com.packt.cardatabase.domain.Owner;
import com.packt.cardatabase.domain.OwnerRepository;

@SpringBootApplication
public class CardatabaseApplication implements CommandLineRunner {
	private static final Logger logger = LoggerFactory.getLogger(CardatabaseApplication.class);
	private final CarRepository repository;
	private final OwnerRepository orepository;
	private final AppUserRepository urepository;

	public CardatabaseApplication(CarRepository repository, OwnerRepository orepository,
			AppUserRepository urepository) {
		this.repository = repository;
		this.orepository = orepository;
		this.urepository = urepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(CardatabaseApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Owner owner1 = new Owner("John", "Johnson");
		Owner owner2 = new Owner("Mary", "Robinson");
		Owner owner3 = new Owner("근수", "안");
		Owner owner4 = new Owner("사", "김");
		Owner owner5 = new Owner("Jone", "Doe");
		orepository.saveAll(Arrays.asList(owner1, owner2, owner3, owner4, owner5));

		repository.save(new Car("Ford", "Mustang", "Red", "ADF-1121", 2023, 59000, owner1));
		repository.save(new Car("Nissan", "Leaf", "White", "SSJ-3002", 2020, 29000, owner2));
		repository.save(new Car("Toyota", "Prius", "Silver", "KKO-0212", 2022, 39000, owner2));
		repository.save(new Car("현대", "쏘나타", "파란색", "HYU-1001", 2022, 27000, owner1));
		repository.save(new Car("기아", "K5", "검정색", "KIA-1002", 2023, 30000, owner2));
		repository.save(new Car("Tesla", "Model 3", "White", "TSL-1003", 2023, 45000, owner3));
		repository.save(new Car("BMW", "320i", "Gray", "BMW-1004", 2020, 48000, owner4));
		repository.save(new Car("Audi", "A4", "Black", "AUD-1005", 2021, 46000, owner5));
		repository.save(new Car("쉐보레", "말리부", "빨간색", "CHE-1006", 2019, 23000, owner1));
		repository.save(new Car("제네시스", "G80", "흰색", "GEN-1007", 2022, 71000, owner2));
		repository.save(new Car("현대", "그랜저", "은색", "HYU-1008", 2023, 40000, owner3));
		repository.save(new Car("기아", "스포티지", "주황색", "KIA-1009", 2023, 33000, owner4));
		repository.save(new Car("르노코리아", "QM6", "초록색", "RSM-1010", 2021, 29000, owner5));

		repository.save(new Car("Ford", "Mustang", "Red", "FOR-1011", 2023, 59000, owner1));
		repository.save(new Car("Nissan", "Leaf", "White", "NIS-1012", 2020, 29000, owner2));
		repository.save(new Car("Toyota", "Prius", "Silver", "TOY-1013", 2022, 39000, owner3));
		repository.save(new Car("현대", "아반떼", "회색", "HYU-1014", 2021, 21000, owner4));
		repository.save(new Car("기아", "모닝", "노란색", "KIA-1015", 2020, 17000, owner5));
		repository.save(new Car("쉐보레", "스파크", "핑크", "CHE-1016", 2019, 14000, owner1));
		repository.save(new Car("제네시스", "GV80", "검정색", "GEN-1017", 2023, 82000, owner2));
		repository.save(new Car("Tesla", "Model Y", "White", "TSL-1018", 2023, 54000, owner3));
		repository.save(new Car("BMW", "X5", "Blue", "BMW-1019", 2020, 67000, owner4));
		repository.save(new Car("Audi", "Q5", "Brown", "AUD-1020", 2021, 63000, owner5));

		repository.save(new Car("르노코리아", "SM6", "짙은 파란색", "RSM-1021", 2020, 27000, owner1));
		repository.save(new Car("현대", "팰리세이드", "검정색", "HYU-1022", 2023, 47000, owner2));
		repository.save(new Car("기아", "쏘렌토", "회색", "KIA-1023", 2022, 35000, owner3));
		repository.save(new Car("현대", "투싼", "빨간색", "HYU-1024", 2021, 28000, owner4));
		repository.save(new Car("기아", "니로", "하늘색", "KIA-1025", 2023, 29000, owner5));
		repository.save(new Car("Ford", "Explorer", "Black", "FOR-1026", 2022, 46000, owner1));
		repository.save(new Car("Toyota", "RAV4", "Dark Green", "TOY-1027", 2021, 39000, owner2));
		repository.save(new Car("Lexus", "NX300", "Pearl", "LEX-1028", 2023, 58000, owner3));
		repository.save(new Car("현대", "캐스퍼", "민트색", "HYU-1029", 2022, 18000, owner4));
		repository.save(new Car("기아", "레이", "분홍색", "KIA-1030", 2020, 15000, owner5));

		repository.save(new Car("Chevrolet", "Trailblazer", "Brown", "CHE-1031", 2022, 31000, owner1));
		repository.save(new Car("Mazda", "CX-5", "Silver", "MAZ-1032", 2023, 36000, owner2));
		repository.save(new Car("Honda", "Civic", "Blue", "HON-1033", 2021, 25000, owner3));
		repository.save(new Car("현대", "아이오닉 5", "흰색", "HYU-1034", 2022, 43000, owner4));
		repository.save(new Car("기아", "EV6", "은색", "KIA-1035", 2023, 45000, owner5));
		repository.save(new Car("Tesla", "Model S", "Black", "TSL-1036", 2022, 88000, owner1));
		repository.save(new Car("BMW", "M4", "Blue", "BMW-1037", 2023, 91000, owner2));
		repository.save(new Car("Audi", "A6", "Silver", "AUD-1038", 2021, 57000, owner3));
		repository.save(new Car("Genesis", "GV70", "White", "GEN-1039", 2023, 76000, owner4));
		repository.save(new Car("르노코리아", "XM3", "주황색", "RSM-1040", 2022, 23000, owner5));

		repository.save(new Car("현대", "베뉴", "빨간색", "HYU-1041", 2021, 20000, owner1));
		repository.save(new Car("기아", "K9", "남색", "KIA-1042", 2023, 62000, owner2));
		repository.save(new Car("쉐보레", "트랙스", "보라색", "CHE-1043", 2020, 21000, owner3));
		repository.save(new Car("Mazda", "Mazda3", "Gray", "MAZ-1044", 2021, 24000, owner4));
		repository.save(new Car("Hyundai", "Santa Fe", "White", "HYU-1045", 2023, 39000, owner5));
		repository.save(new Car("기아", "카니발", "은색", "KIA-1046", 2022, 32000, owner1));
		repository.save(new Car("Nissan", "Juke", "Yellow", "NIS-1047", 2019, 19000, owner2));
		repository.save(new Car("Genesis", "G90", "검정색", "GEN-1048", 2023, 99000, owner3));
		repository.save(new Car("현대", "넥쏘", "하얀색", "HYU-1049", 2023, 72000, owner4));
		repository.save(new Car("기아", "셀토스", "파란색", "KIA-1050", 2022, 28000, owner5));


		// Username: user, password: user
		urepository.save(new AppUser("user", "$2a$10$NVM0n8ElaRgg7zWO1CxUdei7vWoPg91Lz2aYavh9.f9q0e4bRadue", "USER"));
		// Username: admin, password: admin
		urepository.save(new AppUser("admin","$2a$10$8cjz47bjbR4Mn8GMg9IZx.vyjhLXR/SKKMSZ9.mP9vpMu0ssKi8GW", "ADMIN"));
		
		// Fetch all cars and log to console
		for (Car car : repository.findAll()) {
			logger.info("brand: {}, model: {}", car.getBrand(), car.getModel());
		}
	}
}
