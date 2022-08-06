import { useStepperContext } from "../../../contexts/StepperContext";

export default function Payment() {
  const { userData, setUserData } = useStepperContext();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded 
            shadow-sm   focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
          <input
            onChange={handleChange}
            value={userData["school"] || ""}
            name="school"
            placeholder="School or Institute"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["study"] || ""}
            name="study"
            placeholder="Field of study"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <select  onChange={handleChange}
            value={userData["degree"] || ""}  name="degree" 
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"  >
										<option value="" disabled selected hidden>
                       <span className="text-red-200">Degree</span>
                    </option>
										<option value="Diploma degree">Diploma degree</option>
										<option value="Bachelor/s degree">Bachelors degree</option>
										<option value="Doctor of Education - EdD">Doctor of Education - EdD</option>
										<option value="Doctor of Law - JD">Doctor of Law - JD</option>
										<option value="Master/s degree">Masters degree</option>
										<option value="Engineer/s degree">Engineers degree</option>
										<option value="Doctor of Philosophy - phD"> Doctor of Philosophy - phD</option>
										<option value="Other">Other</option>
						</select>
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["gpa"] || ""}
            name="gpa"
            placeholder="CGPA"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <select  onChange={handleChange}
            value={userData["from_year"] || ""}  name="from_year" 
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"  >
										<option value="" disabled selected hidden>From year:</option>
										   <option value="2026">2026</option><option value="2025">2025</option><option value="2024">2024</option><option value="2023">2023</option>
										   <option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option>
										   <option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option>
										   <option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option>
										   <option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option>
										   <option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option>
										   <option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option>
										   <option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option>
										   <option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option>
										   <option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option>
										   <option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option>
										   <option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option>
										   <option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option>
										   <option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option>
										   <option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option>
										   <option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option>
										   <option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option>
						</select>
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="bg-white my-2 p-1 flex border border-ay-200 rounded">
          <select  onChange={handleChange}
            value={userData["to_year"] || ""}  name="to_year" 
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"  >
										<option value="" disabled selected hidden>To year (or expected)</option>
										   <option value="2026">2026</option><option value="2025">2025</option><option value="2024">2024</option><option value="2023">2023</option>
										   <option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option>
										   <option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option>
										   <option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option>
										   <option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option>
										   <option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option>
										   <option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option>
										   <option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option>
										   <option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option>
										   <option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option>
										   <option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option>
										   <option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option>
										   <option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option>
										   <option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option>
										   <option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option>
										   <option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option>
										   <option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option>
						</select>
        </div>
      </div>

    </div>
  );
}
