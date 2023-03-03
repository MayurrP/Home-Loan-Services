package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojo.SanctionLetter;

public interface SanctionLetterServiceInterface {

	public SanctionLetter saveSanctionLetter(SanctionLetter sl);

	public List<SanctionLetter> getSanctionLetter();

	public void deleteSanctionLetter(Integer sanctionId);

	public SanctionLetter updateSanctionLetter(Integer sanctionId, SanctionLetter sl);

	public Optional<SanctionLetter> getSingleSanctionLetter(SanctionLetter sl, Integer sanctionId);

}
